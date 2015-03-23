<?php
/* @var $this OcjenaController */
/* @var $model Ocjena */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'idOcjena'); ?>
		<?php echo $form->textField($model,'idOcjena'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'vrijednost'); ?>
		<?php echo $form->textField($model,'vrijednost'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Objekat_idObjekat'); ?>
		<?php echo $form->textField($model,'Objekat_idObjekat'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Korisnici_idKorisnik'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->