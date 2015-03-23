<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $model ObjekatHasKategorija */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'Objekat_idObjekat'); ?>
		<?php echo $form->textField($model,'Objekat_idObjekat'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Kategorija_idKategorija'); ?>
		<?php echo $form->textField($model,'Kategorija_idKategorija'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->