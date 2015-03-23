<?php
/* @var $this KomentarController */
/* @var $model Komentar */

$this->breadcrumbs=array(
	'Komentars'=>array('index'),
	$model->idKomentar,
);

$this->menu=array(
	array('label'=>'List Komentar', 'url'=>array('index')),
	array('label'=>'Create Komentar', 'url'=>array('create')),
	array('label'=>'Update Komentar', 'url'=>array('update', 'id'=>$model->idKomentar)),
	array('label'=>'Delete Komentar', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idKomentar),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Komentar', 'url'=>array('admin')),
);
?>

<h1>View Komentar #<?php echo $model->idKomentar; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idKomentar',
		'tekst',
		'vrijemeObjave',
		'Recenzija_idRecenzija',
		'Korisnici_idKorisnik',
	),
)); ?>
