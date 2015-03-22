<?php
/* @var $this KomentarController */
/* @var $model Komentar */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'idKomentar'); ?>
		<?php echo $form->textField($model,'idKomentar'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'tekst'); ?>
		<?php echo $form->textArea($model,'tekst',array('rows'=>6, 'cols'=>50)); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'vrijemeObjave'); ?>
		<?php echo $form->textField($model,'vrijemeObjave'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'Recenzija_idRecenzija'); ?>
		<?php echo $form->textField($model,'Recenzija_idRecenzija'); ?>
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